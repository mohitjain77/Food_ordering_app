import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div>
      <h1>{title}</h1>
      {isVisible ? (
        <>
          <button onClick={() => setIsVisible(false)}>hide</button>
          <p>{description}</p>
        </>
      ) : (
        <button onClick={() => setIsVisible(true)}>show</button>
      )}
    </div>
  );
};

const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <>
      <div>
        <Section
          title={"About Section"}
          description={
            "Lorem ipsum dolor sit amet. Id quos quibusdam qui corrupti expedita et repellendus minima a ipsum porro in distinctio neque. Ut quae dolores quo laudantium fuga 33 enim omnis. Aut maiores excepturi sed perspiciatis itaque est dolore nobis aut sunt accusamus est facilis laboriosam nam animi sapiente? Qui natus mollitia 33 dolorum doloremque ut omnis molestias. Ex dolores porro sit omnis inventore est blanditiis nostrum qui reprehenderit tempore. 33 tenetur iste nam voluptatum quidem vel blanditiis maiores ab natus laudantium id perspiciatis molestias et delectus veritatis."
          }
          isVisible={visibleSection === "about"}
          setIsVisible={() => {setVisibleSection("about")}}
        />
        <Section
          title={"Team Section"}
          description={
            "Lorem ipsum dolor sit amet. Id quos quibusdam qui corrupti expedita et repellendus minima a ipsum porro in distinctio neque. Ut quae dolores quo laudantium fuga 33 enim omnis. Aut maiores excepturi sed perspiciatis itaque est dolore nobis aut sunt accusamus est facilis laboriosam nam animi sapiente? Qui natus mollitia 33 dolorum doloremque ut omnis molestias. Ex dolores porro sit omnis inventore est blanditiis nostrum qui reprehenderit tempore. 33 tenetur iste nam voluptatum quidem vel blanditiis maiores ab natus laudantium id perspiciatis molestias et delectus veritatis."
          }
          isVisible={visibleSection === "team"}
          setIsVisible={() => setVisibleSection("team")}
        />
        <Section
          title={"Career Section"}
          description={
            "Lorem ipsum dolor sit amet. Id quos quibusdam qui corrupti expedita et repellendus minima a ipsum porro in distinctio neque. Ut quae dolores quo laudantium fuga 33 enim omnis. Aut maiores excepturi sed perspiciatis itaque est dolore nobis aut sunt accusamus est facilis laboriosam nam animi sapiente? Qui natus mollitia 33 dolorum doloremque ut omnis molestias. Ex dolores porro sit omnis inventore est blanditiis nostrum qui reprehenderit tempore. 33 tenetur iste nam voluptatum quidem vel blanditiis maiores ab natus laudantium id perspiciatis molestias et delectus veritatis."
          }
          isVisible={visibleSection === "career"}
          setIsVisible={() => setVisibleSection("career")}
        />
      </div>
    </>
  );
};

export default InstaMart;
