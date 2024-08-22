import Link from 'next/link';
import { IconEye, IconPencil, IconTrash } from "@tabler/icons-react";

type RowActionsProps = {
    viewUrl: string;
    editUrl?: string;
    onClickDelete?: () => {}
};
export function RowActions({ viewUrl, editUrl, onClickDelete }: RowActionsProps) {

    return (
        <>
            <Link href={viewUrl}><IconEye /></Link>
            {editUrl ? <Link href={editUrl}><IconPencil /></Link> : null}
            {onClickDelete ? <IconTrash style={{
                cursor: "pointer"
            }} onClick={onClickDelete} /> : null}
        </>

    )

}