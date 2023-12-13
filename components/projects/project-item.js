import Image from "next/image";

export default function ProjectItem({ data }) {

  const title = data.properties.Name.title[0].plain_text
  const tools = data.properties.tools.multi_select
  const date = data.properties.date.date.start
  const description = data.properties.description.rich_text[0].plain_text
  const url = data.properties.url.url;
  const imgSrc = data.cover.external.url;

    return (
        <div className="project-card">
          <Image
                className="rounded-t-xl"
                src={imgSrc}
                alt="cover image"
                width={100}
                height={10}
                layout="responsive"
                objectFit="cover"
                quality={100}
            />
            <div className="p-4 flex flex-col">
          <h1 className="text-2xl font-bold">{title}</h1>
          {tools.map((tool) => 
            <h2 className="flex px-2 py-1 mb-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={tool.id}>{tool.name}</h2>
            )}
        
                <h3 className="mt-4 text-xl">{description}</h3>
                <a href={url}>깃허브 바로가기</a>
                <p className="my-1 ">
                    작업시작 : {date}
                </p>
            </div>

        </div>
    );
}