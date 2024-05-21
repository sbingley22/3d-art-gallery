/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';

const LookControls = ({ enabled=true, lockXAxis=false, lockYAxis=false, speedX=1, speedY=1, minX=-Math.PI/2, maxX=Math.PI/2 }) => {
  const { camera, gl } = useThree();
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState([0, 0]);

  useEffect(() => {
    const onMouseDown = (event) => {
      if (!enabled) return
      setIsDragging(true);
      setLastMousePosition([event.clientX, event.clientY]);
    };

    const onMouseMove = (event) => {
      if (!enabled) return
      
      if (isDragging) {
        const deltaX = event.clientX - lastMousePosition[0];
        const deltaY = event.clientY - lastMousePosition[1];
        setLastMousePosition([event.clientX, event.clientY]);

        camera.rotation.order = 'YXZ';
        if (!lockYAxis) camera.rotation.y -= deltaX * 0.005 * speedY;
        if (!lockXAxis) {
          camera.rotation.x -= deltaY * 0.005 * speedX;
          camera.rotation.x = Math.max(
            minX,
            Math.min(maxX, camera.rotation.x)
          );
        }
      }
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    const onMouseLeave = () => {
      setIsDragging(false);
    };

    gl.domElement.addEventListener("mousedown", onMouseDown);
    gl.domElement.addEventListener("mousemove", onMouseMove);
    gl.domElement.addEventListener('mouseup', onMouseUp);
    gl.domElement.addEventListener('mouseleave', onMouseLeave);

    return () => {
      gl.domElement.removeEventListener("mousedown", onMouseDown);
      gl.domElement.removeEventListener("mousemove", onMouseMove);
      gl.domElement.removeEventListener('mouseup', onMouseUp);
      gl.domElement.removeEventListener('mouseleave', onMouseLeave);
    };

  }, [isDragging, lastMousePosition, camera, gl, enabled, lockYAxis, lockXAxis, speedY, speedX, minX, maxX]);

  return null;
};

export default LookControls
