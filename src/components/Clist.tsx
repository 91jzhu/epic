import {useStores} from "../store";
import styled from "styled-components";
import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {Divider, List,Skeleton} from 'antd';
import InfiniteScroll from "react-infinite-scroll-component";

const Clist = observer(() => {
    const {UserStore, HistoryStore} = useStores()
    useEffect(() => {
        onScroll()
        return () => {
            HistoryStore.reset()
        }
    }, [])
    const onScroll = () => {
        HistoryStore.pushList()
    }
    window.scroll = onScroll
    return (
        <Wrapper id='scrollableDiv'>
            <InfiniteScroll
                dataLength={HistoryStore.historyList.length}
                hasMore={!HistoryStore.isLoading && HistoryStore.hasMore}
                loader={<Skeleton avatar paragraph={{rows: 1}} active/>}
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
                onScroll={onScroll}
                next={onScroll}
            >
                <List
                    dataSource={HistoryStore.historyList}
                    renderItem={(item: any) => (
                        <List.Item key={item.id}>
                            <Item key={item.id}>
                                <Div>
                                    <div>
                                        <Img src={item?.attributes.url?.attributes.url}
                                             alt={item?.attributes.url?.attributes.url}
                                             style={{width: '100px'}}/>
                                    </div>
                                    <div>
                                        <H5>{item.attributes.filename}</H5>
                                    </div>
                                </Div>
                                <div>
                                    <a target='_blank'
                                       href={item.attributes.url?.attributes.url}>
                                        {item.attributes.url?.attributes.url}</a>
                                </div>
                            </Item>
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </Wrapper>
    )
})
const Wrapper = styled.div`
  width: 100%;
  max-height: 460px;
  overflow-y:auto;
  ::-webkit-scrollbar {
    display: none;
  }
  flex: 1;
`
const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`
const Div = styled.div`
  //border:1px solid red;
  width: 42%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const H5 = styled.h5`
  font-size: 20px;
`
const Img = styled.img`
  width: 100px;
  border: 1px solid #eee;
`
export default Clist