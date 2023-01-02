import TypeIt from "typeit-react";

interface TypeProps {
    text: string;
    className: string;
}
export const TypeComponent =  ({text, className}: TypeProps) => {
  return (
    <TypeIt
      options={{loop: true}}
      getBeforeInit={(instance) => {
        instance.type(`${text}`).pause(750).delete().pause(500).type("Nice to meet you!!.");
        return instance;
      }}
    />
  );
};