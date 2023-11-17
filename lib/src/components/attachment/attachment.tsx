import styled  from "@emotion/styled";

export interface AttachmentProps {}

export interface IAttachment {
    id: string;
    name: string;
    url: string;
    size: number;
    type: string;
    createdAt: string;
    updatedAt: string;
}

const StyledAttachment = styled.div`
    color: pink;
`;

export function Attachment(props: AttachmentProps) {
    //const { post } = usefetch();

    

    const attachment = async (values: IAttachment) => {
        try {
            //await post()
        }
        catch (error) {
            console.log(error);
        }
    };

    const { } = props;
    return (
        <StyledAttachment>
            Attachment
        </StyledAttachment>
    );
}

export default Attachment;