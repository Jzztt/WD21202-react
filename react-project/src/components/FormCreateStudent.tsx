import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import { ProductService, type IStudent } from "../services/Product";

const FormCreateStudent = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: ProductService.createStudent,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['students'] })
    },
  })
  const handleCreateStudent = (values: IStudent) => {
    mutation.mutate(values)
  };
  return (
    <>
      <h1>Create Student</h1>
      <Form onFinish={handleCreateStudent}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please input your name!" }]}>
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your email!" }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item label="MSSV" name="mssv" rules={[{ required: true, message: "Please input your MSSV!" }]}>
          <Input type="text" />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormCreateStudent;
