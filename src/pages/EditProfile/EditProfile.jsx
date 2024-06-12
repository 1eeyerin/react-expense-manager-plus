import { styled } from 'styled-components';
import { Button } from '@/components/Button';
import { FormField, FormItem, FormMessage } from '@/components/Form';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import Typography from '@/components/Typography';

const EditProfile = () => {
  const handleSubmit = () => {};

  return (
    <>
      <StyledTypography as="h2" variant="typography3" weight="bold">
        프로필 수정
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
          <FormField
            name="displayName"
            render={({ id, htmlFor, name, message }) => (
              <FormItem>
                <Label htmlFor={htmlFor}>닉네임</Label>
                <Input
                  id={id}
                  name={name}
                  placeholder="닉네임을 입력하세요"
                  maxLength={15}
                />
                <FormMessage message={message} />
              </FormItem>
            )}
          />

          <StyledButtonGroup>
            <Button type="submit" fullWidth>
              수정하기
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

// TODO 스타일이 깨지는 문제, 상속이 제대로 안되는 문제
const StyledTypography = styled(Typography)`
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

export default EditProfile;
