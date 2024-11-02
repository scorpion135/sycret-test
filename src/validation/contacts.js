import { z } from 'zod';

export const nameSchema = z.string().superRefine((val, ctx) => {
  if (val.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Имя должно быть заполнено',
    });
  }

  if (val.length === 1) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `Слишком короткое имя`,
    });
  }
});

export const contactsSchema = z.object({
  name: nameSchema,
  phone: z.string().nonempty('Телефон обязателен для заполнения').regex(/^\+7\(\d{3}\)-\d{3}-\d{2}-\d{2}$/, 'Вы ввели некорректный телефон'),
  email: z.string().nonempty('Почта должна быть заполнена').email({ message: 'Вы ввели некорректную почту' }),
});