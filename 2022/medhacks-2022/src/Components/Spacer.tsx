import { FC} from "react";

const Spacer: FC<{
    sectionId: string,
}> = ({ sectionId }) => {
    return (
        <div className='h-20 bg-[#8FC150]' id={sectionId}></div>
    );
}

export default Spacer;