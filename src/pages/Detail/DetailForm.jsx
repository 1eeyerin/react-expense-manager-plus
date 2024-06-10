import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useForm from '@/hooks/useForm';
import postSchema from '@/schemas/postSchema';
import { CATEGORIES } from '@/constants';
import { Button } from '@/components/Button';
import { FormField, FormItem, FormMessage } from '@/components/Form';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { Select, SelectOption } from '@/components/Select';
import { deletePost, updatePost } from '@/redux/slices/postsSlice';

const resolver = (formValues) => {
  const { success, error } = postSchema.safeParse(formValues);
  return success ? {} : error.flatten().fieldErrors;
};

const DetailForm = () => {
  const { id: paramsId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector(({ posts }) =>
    posts.posts.find((item) => item.id === paramsId),
  );

  const onUpdate = (values) => {
    dispatch(updatePost(values));
  };

  const onDelete = () => {
    if (!confirm('삭제하실건가요? 🥲')) return;

    dispatch(deletePost(paramsId));
    navigate(-1);
  };

  const {
    handleSubmit,
    formRef,
    message: errorMessage,
  } = useForm({
    resolver,
    onSubmit: (values) => {
      navigate(-1);
      onUpdate({ ...values, id: post.id });
    },
  });

  if (!post) return null;

  return (
    <StyledForm ref={formRef} onSubmit={handleSubmit}>
      <FormField
        name="date"
        message={errorMessage}
        render={({ id, htmlFor, name, message }) => (
          <FormItem>
            <Label htmlFor={htmlFor}>날짜</Label>
            <Input
              id={id}
              name={name}
              type="date"
              placeholder="지출 항목"
              defaultValue={post.date}
            />
            <FormMessage message={message} />
          </FormItem>
        )}
      />
      <FormField
        name="category"
        message={errorMessage}
        render={({ id, htmlFor, name, message }) => (
          <FormItem>
            <Label htmlFor={htmlFor}>지출 항목</Label>
            <Select
              id={id}
              name={name}
              title="지출 항목"
              defaultValue={post.category}
            >
              {CATEGORIES.map(({ id: cateId, name: cateName }) => (
                <SelectOption key={cateId} value={cateId} text={cateName} />
              ))}
            </Select>
            <FormMessage message={message} />
          </FormItem>
        )}
      />
      <FormField
        name="price"
        message={errorMessage}
        render={({ id, htmlFor, name, message }) => (
          <FormItem>
            <Label htmlFor={htmlFor}>지출 금액</Label>
            <Input
              id={id}
              name={name}
              placeholder="지출 금액"
              type="number"
              defaultValue={post.price}
            />
            <FormMessage message={message} />
          </FormItem>
        )}
      />
      <FormField
        name="description"
        message={errorMessage}
        render={({ id, htmlFor, name, message }) => (
          <FormItem>
            <Label htmlFor={htmlFor}>지출 내용</Label>
            <Input
              id={id}
              name={name}
              placeholder="지출 내용"
              defaultValue={post.description}
            />
            <FormMessage message={message} />
          </FormItem>
        )}
      />
      <StyledButtonGroup>
        <Button type="submit">수정하기</Button>
        <Button variant="destructive" onClick={onDelete}>
          삭제하기
        </Button>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          뒤로가기
        </Button>
      </StyledButtonGroup>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding-bottom: 20px;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`;

export default DetailForm;
