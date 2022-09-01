import React from 'react'

const Statistics = () => {
  const statistics = [
    {
        count: 600,
        title: 'Student joined'
    },
    {
        count: 508,
        title: 'Best Online Course'
    },
    {
        count: 102,
        title: 'Brands Compasitions'
    },
    {
        count: 55,
        title: 'Experienced Teachers'
    },
  ]
  return (
    <div className='wrapper medium flex flex-col lg:flex-row items-center justify-center lg:justify-between pt-[50px] lg:pt-[100px]'>
     {
        statistics.map((statistic) => {
            return (
                <div className='text-center p-[15px] mt-[35px] lg:mt-[0px] lg:p-[0]'>
                    <h2 className='text-5xl text-[#6fcf97] font-bold'>{statistic.count}</h2>
                    <p className='pt-[5px] text-xl'>{statistic.title}</p>
                </div>
            )
        })
     }

    </div>
  )
}

export default Statistics