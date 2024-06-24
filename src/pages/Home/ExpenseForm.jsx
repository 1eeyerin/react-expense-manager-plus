import { useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import useForm from '@/hooks/useForm';
import useShallowSelector from '@/hooks/useShallowSelector';
import postsSchema from '@/schemas/postsSchema';
import { CATEGORIES } from '@/constants';
import { Button } from '@/components/Button';
import { FormField, FormItem, FormMessage } from '@/components/Form';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { Select, SelectOption } from '@/components/Select';
import { createPost } from '@/api/posts';
import useAuthStore from '@/zustand/useAuthStore';

const resolver = (formValues) => {
  const { success, error } = postsSchema.safeParse(formValues);
  return success ? {} : error.flatten().fieldErrors;
};

const ExpenseForm = () => {
  const queryClient = useQueryClient();
  const { userId, author } = useShallowSelector(useAuthStore, (state) => ({
    userId: state.user.id,
    author: state.user.nickname,
  }));

  const { mutate } = useMutation({
    mutationFn: (values) => createPost(values),
    onSuccess: () => {
      alert('등록이 완료되었어요');
      queryClient.invalidateQueries({ queryKey: ['expenses'] });
      formRef.current.reset();
    },
  });

  const {
    handleSubmit,
    formRef,
    message: formMessage,
  } = useForm({
    resolver,
    onSubmit: (values) => {
      mutate({ ...values, id: uuidv4(), userId, author });
    },
  });

  return (
    <StyledForm ref={formRef} onSubmit={handleSubmit}>
      <StyledContainer>
        <FormField
          name="date"
          message={formMessage}
          render={({ id, htmlFor, name, message }) => (
            <FormFieldItem>
              <Label htmlFor={htmlFor}>날짜</Label>
              <Input id={id} name={name} type="date" placeholder="지출 항목" />
              <FormMessage message={message} />
            </FormFieldItem>
          )}
        />
        <FormField
          name="category"
          message={formMessage}
          render={({ id, htmlFor, name, message }) => (
            <FormFieldItem>
              <Label htmlFor={htmlFor}>지출 항목</Label>
              <Select id={id} name={name} title="지출 항목">
                {CATEGORIES.map(({ id: cateId, name: cateName }) => (
                  <SelectOption key={cateId} value={cateId} text={cateName} />
                ))}
              </Select>
              <FormMessage message={message} />
            </FormFieldItem>
          )}
        />
        <FormField
          name="price"
          message={formMessage}
          render={({ id, htmlFor, name, message }) => (
            <FormFieldItem>
              <Label htmlFor={htmlFor}>지출 금액</Label>
              <Input
                id={id}
                name={name}
                placeholder="지출 금액"
                type="number"
              />
              <FormMessage message={message} />
            </FormFieldItem>
          )}
        />
        <FormField
          name="description"
          message={formMessage}
          render={({ id, htmlFor, name, message }) => (
            <FormFieldItem>
              <Label htmlFor={htmlFor}>지출 내용</Label>
              <Input id={id} name={name} placeholder="지출 내용" />
              <FormMessage message={message} />
            </FormFieldItem>
          )}
        />
      </StyledContainer>
      <StyledButton type="submit">저장</StyledButton>
    </StyledForm>
  );
};

const FormFieldItem = styled(FormItem)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-top: 32px;
`;

const StyledForm = styled.form`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
`;

const StyledContainer = styled.div`
  flex-grow: 2;
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export default ExpenseForm;
