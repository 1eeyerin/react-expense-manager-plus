import { useMutation } from '@tanstack/react-query';
import { styled } from 'styled-components';
import useForm from '@/hooks/useForm';
import { Button } from '@/components/Button';
import { FormField, FormItem, FormMessage } from '@/components/Form';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import Typography from '@/components/Typography';
import { updateProfile } from '@/api/auth';
import useAuthStore from '@/zustand/useAuthStore';

const EditProfile = () => {
  const setUser = useAuthStore((state) => state.setUser);

  const { mutate } = useMutation({
    mutationFn: (values) => updateProfile(values),
    onSuccess: (data) => {
      setUser(data);
      alert('프로필 수정이 완료되었어요');
    },
  });

  const {
    handleSubmit,
    formRef,
    message: errorMessage,
  } = useForm({
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('avatar', values.avatar);
      formData.append('nickname', values.nickname);
      mutate(formData);
    },
  });

  return (
    <>
      <StyledTypography>
        <Typography as="h2" variant="typography3" weight="bold">
          프로필 수정
        </Typography>
      </StyledTypography>

      <StyledSection>
        <StyledForm ref={formRef} onSubmit={handleSubmit}>
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
                />
                <FormMessage message={message} />
              </FormItem>
            )}
          />
          <FormField
            name="avatar"
            render={({ id, htmlFor, name, message }) => (
              <FormItem>
                <Label htmlFor={htmlFor}>프로필 이미지</Label>
                <Input
                  type="file"
                  id={id}
                  name={name}
                  accept="image/*"
                  placeholder="썸네일을 입력하세요"
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

export default EditProfile;
