import { BsEye } from "react-icons/bs"
import { BiLike } from "react-icons/bi"
import { Form, Tabs, Input, Button } from 'antd'
import LikeControl from "../../components/like.controller";

const onChange = (key) => {
    console.log(key);
};

export default function Home() {

    const items = [
        {
            key: '1',
            label: `Tạo tiến trình`,
            children: <LikeControl />
        },
        {
            key: '2',
            label: `Lịch sử tăng`,
            children: `Đang xây dựng`,
        }
    ];

    return <div className="page w-screen h-full min-h-[100vh]">
        <div className="bg-red-500 w-full h-full p-6">
            <p>Header</p>
        </div>

        <div className="px-12 py-6 w-full h-full flex">
            <div className="w-[20%] menu-bar space-y-2">
                <div className="flex space-x-2 items-center">
                    <BiLike className="text-xl" />
                    <span className="text-lg">Like page</span>
                </div>
                <div className="flex space-x-2 items-center">
                    <BsEye className="text-xl" />
                    <span className="text-lg">View</span>
                </div>
            </div>

            <div className="w-[80%] main rounded-md">
                <h3 className="w-full bg-main py-4 text-center">Tăng like</h3>
                <div className="mt-4 bg-primary p-4">
                    
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                </div>
            </div>
        </div>
    </div>
}