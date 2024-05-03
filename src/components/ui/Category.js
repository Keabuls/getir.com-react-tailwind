export default function Category({ category: {id, title, image} }) {
    return (
        <a href="#" className="flex flex-col group items-center gap-y-2 text-center p-4 transition hover:bg-purple-50">
            <img src={image} alt={title} className="w-10 h-10 rounded border border-gray-200" />
            <span className="text-sm  text-category-color whitespace-nowrap group-hover:text-brand-color tracking-tight">{title}</span>
        </a>
    )
}