import { CustomModal } from "../Modal/Modal";

interface IProps {
    isOpen: boolean;
    onClose: Function;
}

export const ModalTask = (props: IProps) => {
    const { isOpen, onClose } = props;

    return (
        <CustomModal
            isOpen={isOpen}
            onClose={onClose}
        >
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias possimus quae tenetur obcaecati illum blanditiis? Repellat voluptatum, non provident harum aliquid, ad, quos optio laudantium quis ea magnam ducimus vero.Hic debitis eligendi accusantium fugit suscipit molestias aut beatae ducimus tenetur eaque vero doloribus ex facere cupiditate dolor, numquam aliquam ipsam in quibusdam quae? Expedita pariatur possimus corrupti blanditiis suscipit.
                Odit, quo vel reprehenderit quos cumque tempora voluptatum eos minima beatae quidem ex fugit molestias harum ducimus excepturi, quia sapiente sunt repudiandae numquam sit ipsam et ut? Non, mollitia commodi.
            </p>
        </CustomModal>
    );
}
