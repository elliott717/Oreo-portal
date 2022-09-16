import {
  CardsWidget6,
  ChartsWidget1,
  ChartsWidget9,
  EngageWidget2,
} from 'shared/widgets'

export function Default() {
  return (
    <>
      <div className='row g-5 g-xxl-10'>
        {/* begin::Col */}
        <div className='col-xl-5 col-xxl-4 mb-xl-5 mb-xxl-10'>
          <CardsWidget6 className='h-xl-100' chartHeight='100' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-7 col-xxl-8  mb-5 mb-xxl-10'>
          <EngageWidget2
            className='h-xl-100 bg-gray-200 border-0'
            text='Good admin theme </br> is a tool of enthusiasm'
            textClass='text-gray-800'
            buttonClass='btn-danger'
            buttonText='Create App' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
      {/* begin::Row */}
      <div className='row g-5 g-xxl-10'>
        {/* begin::Col */}
        <div className='col-xl-4 mb-xl-5 mb-xxl-10'>
          <ChartsWidget9 className='h-xl-100' chartHeight={250} />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xl-8 mb-5 mb-xxl-10'>
          <ChartsWidget1
            className='h-xl-100'
            chartHeight={300}
            chartColor='rgba(150, 142, 126, 0.2)' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
    </>
  )
}
