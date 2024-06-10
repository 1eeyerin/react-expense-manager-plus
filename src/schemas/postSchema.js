import { z } from 'zod';
import { CATEGORIES } from '@/constants';

const categoryIds = CATEGORIES.map((category) => category.id);

const postSchema = z.object({
  date: z.string().min(1, {
    message: '날짜를 입력해주세요',
  }),
  category: z.enum(categoryIds, {
    message: '지출 항목을 선택해주세요',
  }),
  price: z
    .string()
    .min(1, {
      message: '지출 금액을 입력해주세요',
    })
    .regex(/^\d+$/, {
      message: '지출 금액은 숫자로 입력해주세요',
    }),
  description: z.string().min(2, {
    message: '내용을 2자 이상 작성해주세요',
  }),
});

export default postSchema;
