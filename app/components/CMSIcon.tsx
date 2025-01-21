type CMSIconProps = {
  icon: string;
};

export const CMSIcon = ({ icon }: CMSIconProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
      style={{
        width: "30px", // Tamanho do ícone
        height: "30px", // Tamanho do ícone
      }}
    />
  );
};
