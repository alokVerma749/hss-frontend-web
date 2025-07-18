import Card from './Card';

const ShopByCategory = () => {
  return (
    <div>
      Shop By Category
      <div className='flex flex-wrap gap-4 mx-auto'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default ShopByCategory;
