export default async function createValidImageFile({ width = 1, height = 1 } = {}) {
  
  const getCanvasBlob = (canvas) => {
   
    return new Promise(function(resolve, reject) {
   
      canvas.toBlob((blob) => {
   
        resolve(blob)
      })
    })
  }
  
  const canvas = document.createElement('canvas')
  
  canvas.width = width
  canvas.height = height
  
  return await getCanvasBlob(canvas)
}