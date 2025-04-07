export default function BookDesc() {
  const isShowMoreNeeded = true;

  return (
    <div className="flex flex-col gap-1">
      <input type="radio" id="read-more" className="peer hidden" />

      <h6 className="underline underline-offset-4">Description</h6>

      <div className="text-small line-clamp-6 overflow-y-hidden peer-checked:line-clamp-none">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis delectus
        nihil aliquam hic, earum aut vel eius porro facere aspernatur accusamus
        praesentium ab excepturi repellendus veritatis vero odit sequi
        reiciendis laborum voluptas ut rerum illo tenetur ducimus? Minus vero,
        architecto sunt unde consequatur sed esse recusandae! Voluptas, quam
        totam voluptatibus accusamus culpa, molestiae nihil sequi perspiciatis
        exercitationem nulla fuga architecto veritatis sunt quae amet ad autem
        laborum impedit odit repudiandae. Ab temporibus corrupti, vel amet
        consequuntur sit. Asperiores modi ratione magni vitae voluptas
        perspiciatis, facilis vel odio itaque. Sequi quasi totam quis minus
        minima sapiente, beatae vitae itaque tenetur ratione voluptas? Nam, at,
        soluta aut architecto dolore id ex nesciunt sint debitis quam facere
        distinctio cum, blanditiis animi fuga similique ratione vitae deserunt
        placeat. Atque excepturi blanditiis et odio? Itaque, alias quae? Nostrum
        incidunt enim unde culpa quod officia ratione sint debitis
        exercitationem cupiditate, iusto dolorum voluptate dolore. Alias ullam
        aperiam similique ipsum cupiditate quia quae cumque. Quia amet
        consequuntur delectus odit dolor aut minus, quas dicta molestias?
        Dolorum soluta eaque ad impedit numquam maxime voluptatibus ratione vel
        veniam reprehenderit quisquam, culpa inventore? Nostrum, blanditiis.
        Nesciunt, dolorum perspiciatis quo in odio optio rem id fuga quaerat
        maiores explicabo recusandae labore. Obcaecati aliquam nobis totam iusto
        praesentium odit, saepe consequatur officia quaerat dolor tenetur,
        quisquam aliquid porro autem minima accusantium possimus magnam
        perspiciatis quasi, mollitia doloremque nisi fugit dolorum omnis.
        Tenetur facere voluptatibus suscipit, id facilis quas a distinctio
        nesciunt, nisi, expedita accusantium odio voluptatum voluptate? Dolor
        quaerat eius obcaecati ex voluptatem eligendi optio possimus
        consequuntur. Excepturi at saepe consectetur, necessitatibus sint aut
        aliquam incidunt recusandae sunt doloribus magni, officia ducimus,
        possimus neque vel. Quis perferendis totam illo, amet asperiores
        aspernatur debitis delectus facilis tenetur. Ipsum laudantium provident,
        sunt mollitia neque asperiores qui eos rem aperiam. Nam rerum quod saepe
        facere repellat deserunt totam recusandae, voluptas dolorem error minima
        repudiandae necessitatibus qui odio deleniti molestiae odit beatae sit
        consequatur sint fuga fugiat! Molestias saepe provident eum! Esse
        aperiam beatae iste reprehenderit veritatis asperiores enim iure at quos
        sapiente animi atque reiciendis, earum optio libero debitis vel
        similique velit? Eius asperiores dolorem odio officiis commodi, cumque
        veniam mollitia assumenda aliquam cum ullam repellat dicta ducimus, quod
        obcaecati, a cupiditate dolores consectetur fuga temporibus dignissimos?
        Ratione, incidunt quasi facilis deserunt, eos cum ipsam, minima quia sed
        culpa provident sit qui a sapiente debitis odit. Asperiores obcaecati ea
        voluptates eum. Dolorum consequatur aliquid suscipit.
      </div>

      {isShowMoreNeeded && (
        <label
          htmlFor="read-more"
          className="bg-sub text-background hover:bg-background hover:text-foreground duration-200 border-2 cursor-pointer font-heading w-fit mt-1 py-1 px-4 rounded-full peer-checked:hidden"
        >
          Read more
        </label>
      )}
    </div>
  );
}
