import React, { useState, useEffect } from "react";
import { api } from "../../services/api/api";
import "../../styles/teste.css";
import { ModalRemove } from "../../components/modal/delete";
import { ModalEdit } from "../../components/modal/edit";

export const Teste = () => {
  const [open , setOpen ] = useState(true)

  return (
    <div className="container-teste">
    {/* <ModalRemove isOpen={open} /> */}
    <ModalEdit isOpen={open} />
    </div>
  );
};
