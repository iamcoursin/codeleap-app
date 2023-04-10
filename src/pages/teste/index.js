import React, { useState, useEffect } from "react";
import { Post } from "../../components/post";
import { api } from "../../services/api/api";
import "../../styles/teste.css";
import { ModalRemove } from "../../components/modal/delete";

export const Teste = () => {
  const [open , setOpen ] = useState(true)

  return (
    <div className="container-teste">
    <ModalRemove isOpen={open} />
    </div>
  );
};
