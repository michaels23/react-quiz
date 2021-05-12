import { FC } from "react";

export type Answer = {
  type: string;
  content: string;
};

export type AlternativeProps = {
  id: number;
  content: string;
};

export const Alternative: FC<AlternativeProps> = (
  props: AlternativeProps
) => {
  return (
    <option
      className="alternative"
      id={`alternative_${props.id.toString()}`}
      value={props.id}
      label={props.content}
    >      
    </option>
  );
};
