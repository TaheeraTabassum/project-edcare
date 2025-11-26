
import Banner from "@/components/Banner";
import Category from "@/components/Category";
import Count from "@/components/Count";
import Courses from "@/components/Courses";
import CourseSubscriptionForm from "@/components/CourseSubscriptionForm";
import Hero from "@/components/Hero";
import Rate from "@/components/Rate";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";


export default function page() {
  return (
    <div>
      <Hero></Hero>
      
    

      <Banner></Banner>

      <Category></Category>

    <CourseSubscriptionForm></CourseSubscriptionForm>

      <Courses></Courses>
      
      <WhyChooseUsSection></WhyChooseUsSection>
       
         <Rate></Rate> 
    </div>
  )
}
