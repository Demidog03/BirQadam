import { Checkbox } from '@/shared/shadcnUI/checkbox'





export const CheckBox = () => {
  return (
    <div className="flex justify-center items- space-x-2 w-full mb-6">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-xs font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Нажмая 'Создать учетную запись', вы соглашаетесь с нашими Условиями<br />
        обслуживания и Политикой конфиденциональности,а также подтверждаете,<br />
        что прочитали нашу Политику использования данных.
      </label>
    </div>
  )
}


