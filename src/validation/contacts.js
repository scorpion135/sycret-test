import { z } from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

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
  phone: z.string().nonempty('Телефон обязателен для заполнения').regex(phoneRegex, 'Вы ввели некорректный телефон'),
  email: z.string().nonempty('Почта должна быть заполнена').email({ message: 'Вы ввели некорректную почту' }),
});