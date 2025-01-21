import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer";
import { ComponentProps } from "react";

type RichTextProps = ComponentProps<typeof CMSRichText>;

export const RicheText = ({ ...props }: RichTextProps) => {
  return (
    <CMSRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className="text-zinc-50 md:text-purple-800 font-semibold">
            {children}
          </b>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside pl-2 py-2 flex flex-col gap-1">
            {children}
          </ul>
        ),
        a: ({ children, ...props }) => (
          <a
            {...props}
            className="hover:text-purple-950 transition-colors underline "
          >
            {children}
          </a>
        ),
      }}
    />
  );
};
