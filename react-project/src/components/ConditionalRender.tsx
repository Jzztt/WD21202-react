const ConditionalRender = () => {
  const inStock: boolean = true;
  const onSale: boolean = true;
  const productName: string | null = null;
  return (
    <>
      <div>ConditionalRender</div>
      {/*  Câu điều kiện bậc 3 */}
      {/* if điều kiện đúng thì hiện thị sau dấu ? và else hiện thị sau dấu : */}
      {inStock ? <p>Product is in stock</p> : <p>Product is out of stock</p>}
      {/* Toán tử && */}
      {/* Nếu điều kiện đúng thì hiện thị nội dung sau && */}
      {onSale && <p>Product is on sale</p>}
      {/* Toán tử || */}
      {/* Nếu điều kiện sai thì hiện thị nội dung sau || */}
      {!onSale || <p>Product is not on sale</p>}
      {/* Toán tử ?? */}
      {/* Nếu điều kiện là null hoặc undefined thì hiện thị nội dung sau ?? */}
      {productName ?? <p>Product name is null</p>}
    </>
  );
};

export default ConditionalRender;
