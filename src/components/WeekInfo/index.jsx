import DailyInfo from '../DailyInfo'

const WeekInfo = () => {
  return (
    <div className='w-full m-auto h-weekInfo md:h-full md:w-1/2 md:overflow-auto overflow-y-scroll text-sm rounded'>
      <ul className='flex items-center flex-col gap-2 p-1 md:text-lg'>
        <DailyInfo />
      </ul>
    </div>
  )
}

export default WeekInfo
