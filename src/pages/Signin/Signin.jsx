import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import styled from 'styled-components';
import useForm from '@/hooks/useForm';
import { Button } from '@/components/Button';
import { FormField, FormItem, FormMessage } from '@/components/Form';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import Typography from '@/components/Typography';
import { loginUser } from '@/api/auth';
import useAuthStore from '@/zustand/useAuthStore';

const Signin = () => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const { mutate } = useMutation({
    mutationFn: (values) => loginUser(values),
    onSuccess: (data) => {
      setUser(data);
      navigate('/');
    },
  });

  const { handleSubmit, message: errorMessage } = useForm({
    onSubmit: async (values) => {
      mutate(values);
    },
  });

  return (
    <>
      <StyledTypography>
        <Typography as="h2" variant="typography4" weight="bold">
          로그인
        </Typography>
      </StyledTypography>
      <StyledSection>
        <StyledForm onSubmit={handleSubmit}>
          <FormField
            name="id"
            render={({ id, htmlFor, name, message }) => (
              <FormItem>
                <Label htmlFor={htmlFor}>아이디</Label>
                <Input id={id} name={name} placeholder="아이디를 입력하세요" />
                <FormMessage message={message} />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            render={({ id, htmlFor, name, message }) => (
              <FormItem>
                <Label htmlFor={htmlFor}>비밀번호</Label>
                <Input
                  id={id}
                  name={name}
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                />
                <FormMessage message={message} />
              </FormItem>
            )}
          />

          <StyledButtonGroup>
            <Button type="submit" fullWidth>
              로그인
            </Button>
            <Button variant="secondary" type="submit" href="/signup" fullWidth>
              회원가입
            </Button>
          </StyledButtonGroup>
        </StyledForm>
      </StyledSection>
    </>
  );
};

const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledTypography = styled.div`
  margin-bottom: 24px;
  text-align: center;
`;

const StyledSection = styled.section`
  gap: 32px;
  padding: 24px;
  background-color: var(--color-base-background);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  max-width: 500px;
  margin: 0 auto;
`;

const StyledForm = styled.form`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding-bottom: 20px;
`;

export default Signin;
