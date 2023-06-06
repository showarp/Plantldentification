// @ts-nocheck
// react hook
import { useState } from "react";
import { router_item } from "../../router";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
//本地存储数据
const storeageselectKeys = sessionStorage.getItem('setSelectKeys') || ''
const defaultOpenKeys = JSON.parse(sessionStorage.getItem('setOpenKeys') || '[]') || []
function Aside(){

    // 路由
    const [router, setRouter] = useState(router_item)
    //选择的菜单
    const [ selectKeys, setSelectKeys] = useState<string>(storeageselectKeys)
    //展开的菜单
    const [ openkeys, setOpenKeys] = useState<[]>(defaultOpenKeys)
    //路由导航
    const  Navigate = useNavigate()

    return(
        <>
            <Menu
            onClick={HandlerMenu}
            mode="inline"
            theme="dark"
            defaultOpenKeys={openkeys}
            defaultSelectedKeys={selectKeys}
            items={router}
            />
            
        </>
    )
}

export default Aside;