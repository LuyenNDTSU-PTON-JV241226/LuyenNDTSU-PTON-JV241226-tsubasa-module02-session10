import React from 'react'

export default function ModalConfirm() {
    const cancelDelete = () => {
        setModalOpen(false); // chỉ cần đóng modal lại
      };
    
    const confirmDelete = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id)); // Xóa todo theo id
        setModalOpen(false); // Tắt modal
      };
      const handleDelete = (todo) => {
        setTodoToDelete(todo); // Lưu thông tin công việc muốn xóa
        setModalOpen(true);    // Mở modal
      };
  return (
    <>
    <button className="btn btn-light" onClick={onCancel}>
     Hủy
    </button>
    <button className="btn btn-danger" onClick={() => onConfirm(listTodo.id)}>
     Xóa
    </button>
    </>
  )
}


  
  
  