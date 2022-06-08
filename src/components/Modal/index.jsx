import { useState, useRef, memo, useEffect } from "react";
import { useClickOutSideComponent } from "../../hooks/useClickOutSideComponent";
import { useTheme } from "styled-components";

// icons
import { MdClose } from "react-icons/md";

// atoms: components
import * as Atom from "./style";

// typography
import * as Typography from "../../Typography";

const Modal = ({ open, title, content, textButton, actionButton }) => {
  const theme = useTheme();
  const modalRef = useRef(null);

  const [hasOpen, setHasOpen] = useState(open);

  const onCloseModal = () => {
    if (actionButton) actionButton();
    setHasOpen(false);
  };

  useClickOutSideComponent(modalRef, onCloseModal);

  useEffect(() => {
    setHasOpen(open);
  }, [open]);

  if (!hasOpen) return null;

  return (
    <Atom.ModalBackDrop>
      <Atom.ModalContainer ref={modalRef}>
        <Atom.ModalClose>
          <MdClose
            size="20px"
            color={theme?.colors?.contrast}
            onClick={() => onCloseModal()}
          />
        </Atom.ModalClose>
        <Atom.ModalInfo>
          <Atom.ModalTitle>{title}</Atom.ModalTitle>
          <Atom.ModalDescription>{content}</Atom.ModalDescription>
        </Atom.ModalInfo>
        <Atom.ModalButtonContainer>
          <Atom.ModalButton onClick={() => actionButton() || onCloseModal()}>
            <Typography.Paragraph>{textButton}</Typography.Paragraph>
          </Atom.ModalButton>
        </Atom.ModalButtonContainer>
      </Atom.ModalContainer>
    </Atom.ModalBackDrop>
  );
};

export default memo(Modal);
