import Input from './Input';
import Textarea from './Textarea';

const Form = () => {
  return (
    <form className="flex flex-col items-start justify-center h-full px-5 py-10">
      <Input name="title" placeholder="Title" size="text-3xl" />
      <Input name="name" placeholder="Your name" fallback="Author" />
      <Textarea name="content" placeholder="Your content" fallback="Content" size="text-lg" />
    </form>
  );
};

export default Form;
