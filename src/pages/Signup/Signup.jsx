import styled from 'styled-components';
import useForm from '@/hooks/useForm';
import { Button } from '@/components/Button';
import { FormField, FormItem, FormMessage } from '@/components/Form';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import Typography from '@/components/Typography';
import { registerUser } from '@/api/auth';

const Signup = () => {
  const {
    handleSubmit,
    formRef,
    message: errorMessage,
  } = useForm({
    onSubmit: async (values) => {
      await registerUser(values);
      formRef.current.reset();
    },
  });

  return (
    <>
      <StyledTypography>
        <Typography as="h2" variant="typography4" weight="bold">
          회원가입
        </Typography>
      </StyledTypography>
      <StyledSection>
        <StyledForm ref={formRef} onSubmit={handleSubmit}>
          <FormField
            name="id"
            render={({ id, htmlFor, name, message }) => (
              <FormItem>
                <Label htmlFor={htmlFor}>아이디</Label>
                <Input
                  id={id}
                  name={name}
                  placeholder="아이디를 입력하세요"
                  minLength={4}
                  maxLength={10}
                  required
                />
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
                  minLength={4}
                  maxLength={15}
                  required
                />
                <FormMessage message={message} />
              </FormItem>
            )}
          />
          <FormField
            name="nickname"
            render={({ id, htmlFor, name, message }) => (
              <FormItem>
                <Label htmlFor={htmlFor}>닉네임</Label>
                <Input
                  id={id}
                  name={name}
                  placeholder="닉네임을 입력하세요"
                  maxLength={10}
                  required
                />
                <FormMessage message={message} />
              </FormItem>
            )}
          />

          <StyledButtonGroup>
            <Button type="submit" fullWidth>
              회원가입
            </Button>
            <Button variant="secondary" href="/signin" fullWidth>
              로그인
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

export default Signup;
