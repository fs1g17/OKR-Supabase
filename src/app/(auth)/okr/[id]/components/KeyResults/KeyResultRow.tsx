export default function KeyResultRow({className, keyResult}:{className:string, keyResult: string}) {
  return (
    <div className={className}>
      {keyResult}
    </div>
  );
}
