import React from 'react';
import { setCnt } from '../../../../store/cntSlice';
import { useSelector, useDispatch } from 'react-redux';
import cntSlice from './../../../../store/cntSlice';

export default function SlideComponent({슬라이드}) {

    const slideWrapRef = React.useRef();  // 슬라이드 slideWrapRef 선택자
    const cnt = useSelector((state)=>state.cntSlice.cnt);
    const dispatch = useDispatch();

    // 4초 간격으로 타이머 실행
    React.useEffect(()=>{
        
        const setId = setInterval(()=>{
            dispatch(setCnt(슬라이드.length-1));  // 카운터 프로그램 액션 호출 => 1씩증가
        }, 4000);
        return ()=> clearInterval(setId);

    },[dispatch, 슬라이드]);


    // cnt 증가시 선택자를 이용 애니메이션 구현
    React.useEffect(()=>{
        if(cnt > 슬라이드.length-3){ // 처음으로 돌아감 : 리턴
            slideWrapRef.current.style.transition = `none`; // none
            slideWrapRef.current.style.left = `${-100 * 0}%`;
            // 비동기식 => style적용 끝나고 다음
            setTimeout( ()=>{
                dispatch(setCnt(1)); // 리턴 다음 1을 전달 => 그리고 다음 2번째 슬라이드 이동 준비완료
            },100);
        }
        else{ // 슬라이드 랩 애니메이션
            slideWrapRef.current.style.transition = `all 0.6s ease-in-out`;
            slideWrapRef.current.style.left = `${-100 * cnt}%`;
        }

    },[cnt]);


    return (
        <div className="slide-container">
            <div className="slide-content">
                <ul className="slide-wrap" ref={slideWrapRef}>
                    {
                        슬라이드.length > 0 && (
                            슬라이드.map((item, idx)=>{
                                return(
                                    <li 
                                        // ref={(e)=>(slideRef.current[idx]=e)}
                                        className={`slide slide${idx+1}`} 
                                        key={item.제목+idx}
                                        style={{
                                            backgroundImage: `url(${process.env.PUBLIC_URL}${item.배경이미지})`
                                        }}
                                    >
                                        <a href="!#" title={item.제목}><span>{item.제목}</span></a>
                                    </li>  
                                )
                            })
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

