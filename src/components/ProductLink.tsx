interface ProductLinkProps {
  name: string;
  url: string;
  price?: string;
  note?: string;
}

export default function ProductLink({ name, url, price, note }: ProductLinkProps) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex items-center justify-between my-4">
      <div>
        <h4 className="font-semibold text-gray-100">{name}</h4>
        {price && <p className="text-cyan-400 text-sm">{price}</p>}
        {note && <p className="text-gray-500 text-xs mt-1">{note}</p>}
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="bg-cyan-500 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-400 transition whitespace-nowrap"
      >
        Beli di Shopee →
      </a>
    </div>
  );
}
