import { articles } from "../../utils/gridData"
import { motion } from "motion/react"
const MovingCrousels = () => {
  const oddArticles = articles.filter((_, index) => index % 2 === 0)
  const evenArticles = articles.filter((_, index) => index % 2 === 1)

  return (
    <div className="rounded-2xl bg-zinc-200 max-w-6xl mx-auto border border-zinc-400 shadow-sm p-4">
      <div className="bg-white w-full rounded-2xl shadow-md p-6">
        <div className="space-y-8">
          <div className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <motion.div animate={{x:["0%","-50%"]}} transition={{duration:20, repeat:Infinity, ease:"linear"}}  className="flex items-center gap-4 p-8">
              {[...oddArticles,...oddArticles].map((article) => (
                <motion.div whileHover={{scale:1.3,x:[0,10,0,10,0]}} key={article.id} className="shrink-0 w-50 h-50 rounded-xl border border-zinc-200 bg-zinc-50 p-3 shadow-sm flex flex-col gap-2 hover:z-40">
                  <div className="text-sm font-medium text-zinc-900 h-10">{article.title}</div>
                  <img className="flex-1 rounded-lg" src={article.image} alt={article.title} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="overflow-hidden mask-[linear-gradient(to_left,transparent,black_5%,black_95%,transparent)]">
            <motion.div animate={{x:["-50%","0%"]}} transition={{duration:20, repeat:Infinity, ease:"linear"}} className="flex items-center gap-4 p-8">
              {[...evenArticles,...evenArticles].map((article) => (
                <motion.div whileHover={{scale:1.3,x:[0,10,0,10,0]}} key={article.id} className="shrink-0 w-50 h-50 rounded-xl border border-zinc-200 bg-zinc-50 p-3 shadow-sm flex flex-col gap-2 hover:z-40">
                  <div className="text-sm font-medium text-zinc-900 h-10">{article.title}</div>
                  <img className="flex-1 rounded-lg" src={article.image} alt={article.title} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovingCrousels
