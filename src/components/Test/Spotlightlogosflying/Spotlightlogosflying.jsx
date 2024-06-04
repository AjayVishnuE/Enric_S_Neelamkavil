import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import spotlightlogo1 from '../../assets/Spotlight/randomlogo_spotlight1.svg'
import spotlightlogo2 from '../../assets/Spotlight/randomlogo_spotlight2.svg'
import spotlightlogo3 from '../../assets/Spotlight/randomlogo_spotlight3.svg'
import spotlightlogo4 from '../../assets/Spotlight/randomlogo_spotlight4.svg'
import spotlightlogo5 from '../../assets/Spotlight/randomlogo_spotlight5.svg'

const ItemType = 'logo';

const DraggableLogo = ({ id, url, index, moveLogo }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item, monitor) {
      if (!drag) return;
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) return;

      // Determine rectangle on screen
      const hoverBoundingRect = monitor.getClientOffset();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      // Time to actually perform the action
      moveLogo(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const opacity = isDragging ? 0 : 1;

  return (
    <div ref={node => drag(drop(node))} style={{ opacity }}>
      <img src={url} alt={`logo-${id}`} style={{ width: '100px', height: '100px' }} />
    </div>
  );
};

const LogoContainer = () => {
  const [logos, setLogos] = useState([
    { id: 1, url: {spotlightlogo1} },
    { id: 2, url: {spotlightlogo2} },
    { id: 3, url: {spotlightlogo3} },
    { id: 4, url: {spotlightlogo4} },
    { id: 5, url: {spotlightlogo5} }
  ]);

  const moveLogo = (dragIndex, hoverIndex) => {
    const dragLogo = logos[dragIndex];
    const newLogos = [...logos];
    newLogos.splice(dragIndex, 1);
    newLogos.splice(hoverIndex, 0, dragLogo);
    setLogos(newLogos);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
        {logos.map((logo, index) => (
          <DraggableLogo
            key={logo.id}
            id={logo.id}
            url={logo.url}
            index={index}
            moveLogo={moveLogo}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default LogoContainer;
