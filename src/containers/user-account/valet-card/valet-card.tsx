import {
  Card,
  CardBody,
  CardHeader,
  Text,
  Range,
  ButtonCard,
  CardFooter,
  Button,
} from "components";

export const ValetCard = () => {
  return (
    <Card>
      <CardHeader>
        <Text className="text-xl pr-10">:کیف پول</Text>
      </CardHeader>
      <CardBody>
        <Text className="mt-20">متن توضیحات</Text>
        <Range className="mt-10" />
        <div className="mt-10 grid grid-cols-4 gap-x-10">
          <ButtonCard text="50/000" />
          <ButtonCard text="40/000" />
          <ButtonCard text="30/000" />
          <ButtonCard text="10/000" />
        </div>
      </CardBody>
      <CardFooter>
        <Button className="w-80">افزایش موجودی</Button>
        <Button disabled>انصراف</Button>
      </CardFooter>
    </Card>
  );
};
