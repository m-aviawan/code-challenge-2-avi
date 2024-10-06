import React from 'react'

const Save = () => {
  return (
    <div>
              {/* News */}
              <section id='news' className='flex flex-col p-14 gap-12'>
          <hgroup className='flex justify-between items-center'>
            <h1 className='text-7xl font-bold'>News</h1>
            <div className='border w-9 h-9 pb-1 font-bold text-2xl flex justify-center items-center border-black'>+</div>
          </hgroup>
          <div id='news-list' className='grid grid-cols-3 gap-16'>
            <article className='news-article flex flex-col gap-4'>
                <img src="https://www.locknlock.com/idn/image/story/news/id/bp/copuminh/thumbnail/137769064btdn.jpg" alt="" />
                <div className='bg-gray-700 text-slate-50 py-1 px-2 h-fit w-fit text-sm mt-3'>Product</div>
                <p className='font-bold text-left text-xl'>LocknLock Indonesia Presents Littleluv Collection for Various Quality Baby Products</p>
                <section className='news-tag flex flex-wrap text-gray-700 gap-1'>
                    <span className='mr-2'>#Little Luv</span>
                    <span className='mr-2'>#Baby Little</span>
                    <span className='mr-2'>#Luv Collection</span> 
                </section>
                <p className='text-gray-500 text-left'>2024. 04. 22</p>
            </article>
            <article className='news-article flex flex-col gap-4'>
                <img src="https://www.locknlock.com/idn/image/story/news/ts/in/yucmshva/thumbnail/131463677dsmw.jpg" alt="" />
                <div className='bg-gray-700 text-slate-50 py-1 px-2 h-fit w-fit text-sm mt-3'>Product</div>
                <p className='font-bold text-left text-xl'>Metro Series from LocknLock Indonesia Ready to Be Everyone's Go-to Tumbler</p>
                <section className='news-tag flex flex-wrap text-gray-700 gap-1'>
                <span className='mr-2'>#Tumbler</span>
                <span className='mr-2'>#MetroSeries</span> 
                <span className='mr-2'>#LocknLockTumbler</span>
                </section>
                <p className='text-gray-500 text-left'>2024. 01. 26</p>
            </article>
            <article className='news-article flex flex-col gap-4'>
                <img src="https://www.locknlock.com/idn/image/story/news/bf/qm/xezbtpxw/thumbnail/125861422mziu.jpg" alt="" />
                <div className='bg-gray-700 text-slate-50 py-1 px-2 h-fit w-fit text-sm mt-3'>Product</div>
                <p className='font-bold text-left text-xl'>LocknLock Indonesia Presents Exclusive Products in Collaboration with Disney and One Piece</p>
                <section className='news-tag flex flex-wrap text-gray-700 gap-1'>
                <span className='mr-2'>#NewProduct</span> 
                <span className='mr-2'>#Collaboration</span>
                <span className='mr-2'>#LocknLockxDisney</span>
                <span className='mr-2'>#LocknLockxOnePiece</span> 
                <span className='mr-2'>#Tumbler</span>
                </section>
                <p className='text-gray-500 text-left'>2023. 12. 14</p>
            </article>
          </div>
        </section>

        {/* Lounge */}
        <section id='lounge' className='flex flex-col bg-gray-100'>
          <hgroup className='flex justify-between items-center p-14'>
            <h1 className='text-7xl font-bold'>Lounge</h1>
            <div className='border w-9 h-9 pb-1 font-bold text-2xl flex justify-center items-center border-black'>+</div>
          </hgroup>
          <div id='lounge-carousel'>
            <div className="carousel carousel-center absolute left-0 w-full space-x-16 p-1 bg-gray-100">
                <div id='item1' className="card image-full carousel-item w-[95%] h-[95%] rounded-none">
                  <figure>
                    <img
                      src="https://www.locknlock.com/idn/image/story/lounge/nq/py/okjtxbbo/thumbnail/107635201wveh.jpg"
                      alt=""
                      className='object-fill pl-16 z-10 bg-gray-100 '
                      />
                  </figure>
                  <section className='content pl-16 z-20 text-white'>
                    <div className='my-bg-lin-1 p-16 h-full flex flex-col justify-end'>
                      <h1 className='text-[43px] font-bold text-left mb-3 drop-shadow-sm'>Meatball Soup</h1>
                      <p className='w-[50%] text-left text-base mb-5 flex gap-2 font-normal drop-shadow-sm'>
                        <span>#Chef</span>
                        <span>#Food</span>
                        <span>#Cooking</span>
                        <span>#Recipe</span>
                        <span>#Suit Pan</span>
                        <span>#Saucepan</span>
                      </p>
                      <p className='w-[50%] text-left text-base font-medium drop-shadow-sm'>2023. 05. 25</p>
                    </div>
                  </section>
                </div>
                <div id='item2' className="card image-full carousel-item w-[90%] h-[90%] rounded-none">
                  <figure>
                    <img
                      src="https://www.locknlock.com/idn/image/story/lounge/wg/jr/pyvaljxx/thumbnail/107634436nqnk.jpg"
                      alt=""
                      className='object-fill z-10 bg-gray-100 '
                      />
                  </figure>
                  <section className='content z-20 text-white'>
                    <div className='my-bg-lin-1 p-16 h-full flex flex-col justify-end'>
                      <h1 className='text-[43px] font-bold text-left mb-3 drop-shadow-sm'>Laksa Noodle</h1>
                      <p className='w-[50%] text-left text-base mb-5 flex gap-2 font-normal drop-shadow-sm'>
                        <span>#Chef</span>
                        <span>#Food</span>
                        <span>#Cooking</span>
                        <span>#Recipe</span>
                        <span>#Suit Pan</span>
                        <span>#Casserole</span>
                      </p>
                      <p className='w-[50%] text-left text-base font-medium drop-shadow-sm'>2023. 05. 16</p>
                    </div>
                  </section>
                </div>
                <div id='item3' className="card image-full carousel-item w-[95%] h-[95%] rounded-none">
                  <figure>
                    <img
                      src="https://www.locknlock.com/idn/image/story/lounge/pw/mt/mrbsyswa/thumbnail/107546239batb.jpg"
                      alt=""
                      className='object-fill pr-16 z-10 bg-gray-100 '
                      />
                  </figure>
                  <section className='content pr-16 z-20 text-white'>
                    <div className='my-bg-lin-1 p-16 h-full flex flex-col justify-end'>
                      <h1 className='text-[43px] font-bold text-left mb-3 drop-shadow-sm'>Cozy Apple Tea</h1>
                      <p className='w-[50%] text-left text-base mb-5 flex gap-2 font-normal drop-shadow-sm'>
                        <span>#Chef</span>
                        <span>#Drink</span>
                        <span>#Mug</span>
                        <span>#Hot&Cool</span>
                        <span>#Recipe</span>
                      </p>
                      <p className='w-[50%] text-left text-base font-medium drop-shadow-sm'>2023. 04. 07</p>
                    </div>
                  </section>
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2 mt-[650px]">
              <a href="#item1" className="btn btn-xs">1</a>
              <a href="#item2" className="btn btn-xs">2</a>
              <a href="#item3" className="btn btn-xs">3</a>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Save
