import { Form, Tabs, Input, Button } from 'antd'
import { useEffect } from 'react'
import { useAppContext } from '../src/App'
const LikeControl = () => {

    const { socket } = useAppContext()

    useEffect(() => {
        socket?.on("liked", (data) => {
            console.log(data)
        })

    }, [socket])

    const handleLike = (values) => {
        socket.emit("like", values.id)
    }

    return <div className="tab p-4">
        <Form
            onFinish={handleLike}
            name="wrap"
            labelCol={{ flex: '80px' }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ flex: 1 }}
            colon={false}
            layout={'horizontal'}>
            <Form.Item name={"id"} label="ID">
                <Input placeholder="Ví dụ: am.nhac.su.song" style={{ height: 38 }} />
            </Form.Item>

            <Form.Item name={"count"} label="Số lượng">
                <Input type="number" placeholder="0" style={{ height: 38 }} />
            </Form.Item>
            <button className="w-full btn">Bắt đầu</button>
        </Form>
    </div>
}

export default LikeControl