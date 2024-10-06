import CompanyCulture from "../components/companyCulture"
import HistoryBanner from "../components/historyBanner"
import BreakPicture from "../features/about/components/breakPicture"
import HistorySessionWithPictBg from "../features/about/components/historySessionWithPictBg"
import HistorySessionLeftWOPict from "../features/about/components/historySessionLeftWOPict"
import HistorySessionRightWOPict from "../features/about/components/historySessionRightWOPict"
import HistorySessionHOC from "../features/about/components/historySessionHOC"

const About = () => {
    return (
      <main className='flex flex-col lg:gap-16 md:gap-12 gap-5'>
          <HistoryBanner />
  
          <section id="phrase" className='w-full px-5 pb-11 md:px-12 lg:px-16'>
            <h1 className='lg:text-[70px] text-[34px] font-bold text-left flex flex-col leading-tight'>
                Always striving to become the most beloved ‘kitchen-life culture’ company by people throughout the world
            </h1>
          </section>

          <BreakPicture 
          imgUrl='https://www.locknlock.com/idn/image/common/about/history/2022-lg.jpg'
          />

          <HistorySessionHOC id='history-1'>
            <HistorySessionLeftWOPict
            id="history-2022"
            year={2022}
            MonthAndDesc={[
              {
                month: 'DEC',
                desc: 'CSR Campaign “Love for Planet”, awarded the Industry & Energy Minister Prize'
              },
              {
                month: 'SEP',
                desc: 'Carrying out Resource Recycling Campaign “Love for Planet” & Opening of the “Factory (Anseong) Outlet Shop”'
              },
              {
                month: 'AUG',
                desc: 'Publication of the first ESG Sustainability Management Report'
              },
              {
                month: 'MAY',
                desc: 'Relocation of Seoul Headquarters'
              },
              {
                month: 'APR',
                desc: 'Supporting relief goods to war refugees in Ukraine'
              },
            ]}
            />
            <HistorySessionRightWOPict
            id="history-2021"
            year={2021}
            MonthAndDesc={[
              {
                month: 'SEP',
                desc: 'Held the 1st LocknLock Design Contest: Design Your Life'
              },
              {
                month: 'JUL',
                desc: 'Launched the ‘Net-Zero Council’ in collaboration with CJ Logistics and Twosome Place to implement ESG management Launched ‘Kitchen Puri’, the first kitchen-specific air purifier of its kind'
              },
              {
                month: 'JUN',
                desc: 'Marketed the industry-first tote bag made of recycled PP'
              },
            ]}
            />
            <HistorySessionRightWOPict
            id="history-2020"
            year={2020}
            MonthAndDesc={[
              {
                month: 'OCT',
                desc: 'Acquired ‘Jenniferoom’, small kitchen appliance brand'
              },
              {
                month: 'JUL',
                desc: 'Launched differentiated and innovative small kitchen appliance, ‘steam air fryer’'
              },
            ]}
            />
          </HistorySessionHOC>
  
          <BreakPicture 
          imgUrl='https://www.locknlock.com/idn/image/common/about/history/2019-web.jpg'
          />

          <HistorySessionHOC id='history-2'>
            <HistorySessionLeftWOPict
            id="history-2019"
            year={2019}
            MonthAndDesc={[
              {
                month: 'DEC',
                desc: 'Built global design centers in Korea, China And Vietnam'
              },
              {
                month: 'OCT',
                desc: 'Renewed LocknLock Brand Identity'
              },
              {
                month: 'JAN',
                desc: 'Established innovation lab, LL Labs'
              },
            ]}
            />
            <HistorySessionRightWOPict
            id="history-2017"
            year={2017}
            MonthAndDesc={[
              {
                month: 'AUG',
                desc: 'Acquired by private equity fund ‘Affinity Equity Partners’'
              },
            ]}
            />
            <HistorySessionRightWOPict
            id="history-2016"
            year={2016}
            MonthAndDesc={[
              {
                month: 'OCT',
                desc: 'Established trading company in USA'
              },
            ]}
            />
            <HistorySessionRightWOPict
            id="history-2014"
            year={2014}
            MonthAndDesc={[
              {
                month: 'JAN',
                desc: 'Built LocknLock logistics warehouse in Ansung'
              },
            ]}
            />
          </HistorySessionHOC>
  
          <BreakPicture 
          imgUrl='https://www.locknlock.com/idn/image/common/about/history/2013-lg.jpg'
          />

          <HistorySessionHOC id='history-3'>
            <HistorySessionLeftWOPict
              id="history-2013"
              year={2013}
              MonthAndDesc={[
                {
                  month: 'MAY',
                  desc: 'Established ‘LocknLock Green Mate’, the official university student supporters'
                },
              ]}
              />
          </HistorySessionHOC>
          
          <BreakPicture 
          imgUrl='https://www.locknlock.com/idn/image/common/about/history/2012-lg.jpg'
          />
          
          <HistorySessionHOC id='history-4'>
            <HistorySessionLeftWOPict
            id="history-2012"
              year={2012}
              MonthAndDesc={[
                {
                  month: 'DEC',
                  desc: 'Opened first Flagship store in Myanmar'
                },
                {
                  month: 'OCT',
                  desc: 'Opened first direct sales store in Australia'
                },
                {
                  month: 'AUG',
                  desc: 'Completed construction of Vung Tau cookware plant in Vietnam'
                },
            ]}
            />
          </HistorySessionHOC>
  
          <BreakPicture 
          imgUrl='https://www.locknlock.com/idn/image/sub/2021/06/23/46611649wwbl.jpg'
          />
  
          <HistorySessionHOC id='history-5'>
            <HistorySessionLeftWOPict
            id="history-2011"
            year={2011}
            MonthAndDesc={[
              {
                month: 'DEC',
                desc: 'Completed construction of Vung Tau glass plant in Vietnam'
              },
              {
                month: 'NOV',
                desc: 'Completed automatic logistics center in Asan, South Choongcheong province'
              },
            ]}
            />
          </HistorySessionHOC>
  
          <BreakPicture 
          imgUrl='https://www.locknlock.com/idn/image/common/innovation/design-center/design-business.jpg'
          />
  
          <HistorySessionHOC id='history-6'>
            <HistorySessionLeftWOPict
            id="history-2010"
            year={2010}
            MonthAndDesc={[
              {
                month: 'NOV',
                desc: 'Opened Korea Mall in China’s Taobao'
              },
              {
                month: 'NOV',
                desc: 'Established trading company in Germany'
              },
              {
                month: 'SEP',
                desc: 'Established Vung Tau production company In Vietnam'
              },
              {
                month: 'MAR',
                desc: 'Established HCM trading company in Vietnam'
              },
              {
                month: 'JAN',
                desc: 'Listed on KOSPI'
              },
            ]}
            />
          </HistorySessionHOC>
            
          <section>
            <HistorySessionWithPictBg 
            id='history-7' 
            year={2009} 
            imgUrl='https://scbd.com/assets/images/companies/history/1674959002792.jpg-1707128183.jpg-1716949082.jpg'
            monthAndDesc={[
              {
                month: 'JUL',
                desc: 'Established trading company in Indonesia'
              },
              {
                month: 'FEB',
                desc: 'Established Hanoi trading company in Vietnam'
              }
            ]}
            />
            <HistorySessionWithPictBg 
            id='history-8' 
            year={2008} 
            imgUrl='https://www.locknlock.com/idn/image/common/about/history/2008-lg.jpg'
            monthAndDesc={[
              {
                month: 'NOV',
                desc: 'Established trading company in Thailand'
              },
              {
                month: 'APR',
                desc: 'Opened first Flagship store in Vietnam'
              },
              {
                month: 'JAN',
                desc: 'Opened first Flagship store in Korea'
              }
            ]}
            />
          <BreakPicture 
          imgUrl='https://www.locknlock.com/idn/image/common/about/history/2007-lg.jpg'
          />
          </section>


          <HistorySessionHOC id='history-9'>
            <HistorySessionLeftWOPict
            id="history-2007"
            year={2007}
            MonthAndDesc={[
              {
                month: 'OCT',
                desc: 'Completed third plant in Suzhou, China'
              },
              {
                month: 'SEP',
                desc: 'Established trading company in Shenzhen, China'
              },
              {
                month: 'AUG',
                desc: 'Merged Hanacobi Co.,Ltd. and LocknLock Co.,Ltd.'
              },
            ]}
            />
            <HistorySessionRightWOPict
            id="history-2006"
            year={2006}
            MonthAndDesc={[
              {
                month: 'DEC',
                desc: 'Merged LocknLock Co.,Ltd. and B&B Co.,Ltd.'
              },
              {
                month: 'MAY',
                desc: 'Established trading company in Beijing, China'
              },
            ]}
            />
            <HistorySessionRightWOPict
            id="history-2005"
            year={2005}
            MonthAndDesc={[
              {
                month: 'DEC',
                desc: 'Split the company to B&B Co.,Ltd. Hanacobi Co.,Ltd. LocknLock Co.Ltd.'
              },
            ]}
            />
          </HistorySessionHOC>
  
          <HistorySessionWithPictBg 
          id='history-10' 
          year={2004} 
          imgUrl='https://www.locknlock.com/idn/image/common/about/history/2004-lg.jpg'
          monthAndDesc={[
            {
              month: 'JUN',
              desc: 'Completed Asan plant in South Choongcheong province'
            },
            {
              month: 'APR',
              desc: 'Established trading company in Shanghai, China'
            }
          ]}
          />
          
          <HistorySessionHOC id='history-11'>
            <HistorySessionRightWOPict
            id="history-2003"
            year={2003}
            MonthAndDesc={[
              {
                month: 'JUN',
                desc: 'Renamed from Hana Mart Co.,Ltd. to LocknLock Co.,Ltd.'
              },
            ]}
            />
            <HistorySessionRightWOPict
            id="history-2002"
            year={2002}
            MonthAndDesc={[
              {
                month: 'DEC',
                desc: 'Launched official online community ‘LocknLock Supporters’'
              },
              {
                month: 'MAR',
                desc: 'Opened official Internet shopping mall ‘LocknLock M’'
              },
            ]}
            />
          </HistorySessionHOC>

          <BreakPicture 
          imgUrl='https://www.locknlock.com/idn/image/common/innovation/design-center/design-thinking.jpg'
          />

          <HistorySessionHOC id='history-12'>
            <HistorySessionRightWOPict
            id="history-1998"
            year={1998}
            MonthAndDesc={[
              {
                month: 'OCT',
                desc: 'Launched four-sided airtight locking system container'
              },
            ]}
            />
            <HistorySessionRightWOPict
            id="history-1994"
            year={1994}
            MonthAndDesc={[
              {
                month: 'MAY',
                desc: 'Renamed to Hanacobi Co.'
              },
            ]}
            />
            <HistorySessionRightWOPict
            id="history-1987"
            year={1987}
            MonthAndDesc={[
              {
                month: 'JUN',
                desc: 'Established Hana Mart Co.'
              },
            ]}
            />
            <HistorySessionRightWOPict
            id="history-1978"
            year={1978}
            MonthAndDesc={[
              {
                month: 'NOV',
                desc: 'Established Kukjin Retail Co.'
              },
            ]}
            />
          </HistorySessionHOC>
  
          <CompanyCulture />
  
      </main>
    )
  }
  
  export default About
  