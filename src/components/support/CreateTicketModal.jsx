import { useForm } from "react-hook-form";

import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";

export default function CreateTicketModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit
      )}
      className="space-y-4"
    >
      <Input
        label="Title"
        name="title"
        register={register}
        error={errors.title}
      />

      <Button type="submit">
        Create Ticket
      </Button>
    </form>
  );
}