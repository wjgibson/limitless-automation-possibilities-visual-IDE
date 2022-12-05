import { Handle, Position } from "reactflow";
import React, {  useState } from "react";
import { Button, Collapse, Divider} from "antd";
import DownDownMenu from "./DropDownMenu.js";
import "../Elements/elements.css";

const { Panel } = Collapse;

function ControlModuleNode({ data }) {
  const setSeqType = (type) => {
    data.sType = type;
  };

  const[color, setColor]= useState()
  const [sequenceLayer, setSeqLayer] = useState(1)

  const isValidConnection = (connection) => connection.target === "sequence";

  data.opcid = 45;
  setSeqType(1);


  return (
    <div className="conMod" style={{backgroundImage: "radial-gradient(white 35%, "+color+")"}}>
      <div id="sequenceLayer" ><div id="sequanceLayerBubble">{sequenceLayer}</div></div>
      <DownDownMenu setSeqLayer={setSeqLayer} setColor={setColor}></DownDownMenu>
      <p>Control Module</p>
      <Handle
        type="target"
        position={Position.Top}
        isValidConnection={isValidConnection}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        isValidConnection={isValidConnection}
      />
    </div>
  );

}



export default ControlModuleNode;
