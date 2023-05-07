// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
import { Box, Flex, Heading, Text, IconButton, CircularProgress, CircularProgressLabel} from '@chakra-ui/react';
import { IoBatteryFullSharp, IoWifiSharp, IoBarChartOutline, IoSearchOutline, IoReceipt, IoCloseCircleOutline} from 'react-icons/io5';
import { FiCopy } from 'react-icons/fi';
import { BsSend } from 'react-icons/bs';
import { MdOutlineRequestQuote } from 'react-icons/md';
import { BiArrowFromTop } from 'react-icons/bi';
import { BsQrCodeScan } from 'react-icons/bs';
import { RiPlaneFill } from 'react-icons/ri';
import { GiLightBackpack } from 'react-icons/gi';
import { CiSquareMore } from 'react-icons/ci';
import { BiMessageDots } from 'react-icons/bi';
import { TbBellPlusFilled } from 'react-icons/tb';
import { RiHome7Fill } from 'react-icons/ri';
import { FaWallet } from 'react-icons/fa';
import { TbReceipt } from 'react-icons/tb';
import { CiSettings } from 'react-icons/ci';






import Data from '../tansaction/transactions.json'





const Home = () => {
  return (

        <Box 
          className='lvp-image'
          width={['97%', '26%']} 
          color='white' 
          alignItems={"center"} 
          height={"auto"}
          pt={".2em"}
          margin={"auto"}
          mt={"2em"}
          mb={"2em"}
          bg={"black"}
          pb={'2.5em'}
        >
          <Flex 
            gap={"14.5em"}
            pt={".5em"}
            ml={"12px"}
            color={"white"}
          >
            <Text>9:41</Text>
            <Flex
              gap={"5px"}
              >
              <IoBarChartOutline />
              <IoWifiSharp />
              <IoBatteryFullSharp/>
            </Flex>
          </Flex>

          <Flex width={"94%"} margin={'auto'} 
            height={'auto'} mt={'2em'} 
            mb={'1em'}>
            <Flex gap={"1em"}>
              <Box className='user-image'></Box>
              <Box>
              <Heading fontSize={"1.5rem"}>Hi Lucia</Heading>
              <Text fontSize={".9rem"}>Have a nice day!</Text>
              </Box>
            </Flex>
            <Flex gap={'10px'} ml={'6em'}>
              <BiMessageDots fontSize={"30px"} />
              <TbBellPlusFilled fontSize={"30px"} />
            </Flex>
          </Flex>

          <Box bg={'#1055b1'} borderRadius={'12px'} width={'94%'} 
           m={'auto'} height={'auto'} mb={'1em'}>
            <Flex flexDirection={'column'} className='acct-card-bg'>
              <Text>Balance</Text>
              <Heading>$6,412</Heading>
              <Flex bg={'black'} width={'fit-content'} padding={'7px 12px'} 
                borderRadius={'12px'} mt={'5px'} gap={'10px'} >
                <Text>4122657895</Text>
                <FiCopy style={{marginTop: "5px"}} />
              </Flex>
            </Flex>
          </Box>

          <Flex width={'94%'} m={'auto'} border={'1px solid grey'} height={'80px'}
           borderRadius={'14px'} padding={'10px'} gap={'1.5em'}>
            <Box>
              <CircularProgress value={60} color='blue' position={'relative'}
               >
              </CircularProgress>
            </Box>
              <Box position={'absolute'} padding={'14px'}>
                <CircularProgress value={30} color='yellow'
                ></CircularProgress>
              </Box>
              <Text fontSize={'14px'} mt={'10px'}>Your spending decrease -10% from last month. Good job.</Text>
              <IoCloseCircleOutline  fontSize={'40px'}/>
          </Flex>

          <Box width={'90%'} margin={'auto'} mb={'20px'}>
            <Flex fontSize={'73px'} gap={'.5em'} textAlign={'center'}>
              <Box>
                <IconButton
                  bg={'#bbbbbb4d'}
                  aria-label='Search database'
                  icon={<BsSend color='white' fontSize={'30px'} />}
                  padding={'24px 12px'}
                />
                <Text fontSize={'12px'}>Send</Text>
              </Box>

              <Box>
                <IconButton
                  bg={'#bbbbbb4d'}
                  aria-label='Search database'
                  icon={<MdOutlineRequestQuote
                    fontSize={'30px'} color='white' />}
                  padding={'24px 12px'}
                />
                <Text fontSize={'12px'}>Request</Text>
              </Box>

              <Box>
                <IconButton
                  bg={'#bbbbbb4d'}
                  aria-label='Search database'
                  icon={<BiArrowFromTop color='white' fontSize={'30px'} />}
                  padding={'24px 12px'}
                />
                <Text fontSize={'12px'}>Top-up</Text>
              </Box>

              <Box>
                <IconButton
                  bg={'#bbbbbb4d'}
                  aria-label='Search database'
                  icon={<BsQrCodeScan color='white' fontSize={'30px'} />}
                  padding={'24px 12px'}
                />
                <Text fontSize={'12px'}>QR-Scan</Text>
              </Box>

            </Flex>

            <Flex fontSize={'73px'} marginTop={'3px'} gap={'.5em'} textAlign={'center'} >

              <Box>
                <IconButton
                  bg={'#bbbbbb4d'}
                  aria-label='Search database'
                  icon={<RiPlaneFill color='white' fontSize={'30px'} />}
                  padding={'24px 12px'}
                />
                <Text fontSize={'12px'}>Invest</Text>
              </Box>

              <Box>
                <IconButton
                  bg={'#bbbbbb4d'}
                  aria-label='Search database'
                  icon={<GiLightBackpack color='white' fontSize={'30px'} />}
                  padding={'24px 12px'}
                />
                <Text fontSize={'12px'}>Insurance</Text>
              </Box>
              <Box>
                <IconButton
                  bg={'#bbbbbb4d'}
                  aria-label='Search database'
                  icon={<IoReceipt color='white' fontSize={'30px'} />}
                  padding={'24px 12px'}
                />
                <Text fontSize={'12px'}>Bills</Text>
              </Box>
              <Box>
                <IconButton
                  bg={'#bbbbbb4d'}
                  aria-label='Search database'
                  icon={<CiSquareMore  color='white' fontSize={'30px'} />}
                  padding={'24px 12px'}
                />
                <Text fontSize={'12px'}>More</Text>
              </Box>
            </Flex>
          </Box>

          <Box width={'94%'} margin={'auto'} overflow={'hidden'}>
            <Heading mb={'12px'}>Deals</Heading>
            <Flex gap={'15px'} overflow={'hidden'}>
              <Box bg={'blue'} width={'525px'} height={'130px'} borderRadius={'14px'} 
                >
                <Box className='lvp-bg' 
                  pl={'10px'} pt={'4em'} 
                  >
                  <Text>Promotion <br />Banner </Text>
                </Box>
              </Box>

              <Box bg={'orange'} width={'225px'} height={'130px'}
                borderRadius={'14px'}>
                <Box className='lvp-bg' 
                  pl={'10px'} pt={'4em'}
                  >
                  <Text>Promotion <br />Banner </Text>
                </Box>
              </Box>
            </Flex>
          </Box>

          <Flex flexDirection={'column'} width={'94%'} margin={'auto'} mt={'25px'} 
            overflow={'hidden'} mb={'1.5em'}>
            <Heading mb={'20px'} fontSize={'18px'}>Most Recipient</Heading>
            <Flex gap={'20px'}>
              <Box textAlign={'center'}> 
                <Box className='reps1'></Box>
                <Text>Lucky</Text>
              </Box> 

              <Box textAlign={'center'}>
                <Box className='reps2'></Box>
                <Text>Nicole</Text>
              </Box> 

              <Box textAlign={'center'}>
                <Box className='reps3'></Box>
                <Text>Bruno</Text>
              </Box>

              <Box textAlign={'center'}>
                <Box className='reps4'></Box>
                <Text>Marco</Text>
              </Box>
              <Box textAlign={'center'}>
                <Box className='reps5'></Box>
                <Text>Anne</Text>
              </Box>

            </Flex>
          </Flex>

          <Flex flexDirection={'column'} width={'94%'} margin={'auto'}>
            <Heading fontSize={'18px'}>Recent Transactions</Heading>
            <Flex flexDirection={'column'} gap={'1.5em'} mt={'25px'}>
                { 
                  Data && Data.map( transaction => {
                    return(
                      <Flex className='box' key={ transaction.id }>
                          <Box bg={'#80808066'} padding={'12px'} height={'fit-content'}
                           marginRight={'16px'} borderRadius={'12px'}>
                            <img className='prod-img' src={transaction.image} alt="" width={'50px'} height={'50px'}/>
                          </Box>
                          <Box mr={'76px'} mt={'6px'}>
                            <Heading fontSize={'14px'} mb={'10px'}>{transaction.brand}</Heading>
                            <Text fontSize={'12px'} color={'gray'}>{transaction.date}</Text>
                          </Box>
                          <Text fontSize={'14px'}>-$ {transaction.price}.00</Text>
                      </Flex>
                    )
                  })
                }
            </Flex>
          </Flex>

          <Flex gap={'2em'} width={'80%'} m={'auto'} mt={'2.5em'} 
            borderRadius={'18px'} padding={'12px 38px'} bg={'dimgrey'}>
            <RiHome7Fill fontSize={'35px'} color={'orange'} /> 
            <FaWallet color='lightgray' fontSize={'35px'} />
            <TbReceipt color='lightgray' fontSize={'35px'} />
            <CiSettings color='lightgray'  fontSize={'35px'} />
          </Flex>
            
        </Box>
    
  )
}

export default Home














                  

                  


















