import { ModalType } from "./ModalType";

export interface ModalConfig{
    type: ModalType;
    boardId?: number;
    columnId?: number;
    taskId?: number;
}