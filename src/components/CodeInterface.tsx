import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Clock, Play, Upload, ArrowRight } from "lucide-react";

export const CodeInterface = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Mock game interface */}
        <Card className="bg-gradient-card border-border overflow-hidden">
          {/* Game header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-secondary px-3 py-1 rounded-sm">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-mono">Connected to match</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="font-mono text-lg">09:54</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 h-[600px]">
            {/* Problem description */}
            <div className="p-6 border-r border-border overflow-y-auto">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Two Sum</h2>
                
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-foreground font-semibold mb-2">Problem Description</h3>
                    <p className="leading-relaxed">
                      Given an array of integers <code className="bg-secondary px-1 rounded text-accent font-mono">nums</code> and an integer <code className="bg-secondary px-1 rounded text-accent font-mono">target</code>, return indices of the two numbers such that they add up to <code className="bg-secondary px-1 rounded text-accent font-mono">target</code>.
                    </p>
                  </div>
                  
                  <p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
                  <p>You can return the answer in any order.</p>
                </div>

                <div className="mt-8">
                  <h3 className="text-foreground font-semibold mb-4">Example 1:</h3>
                  <div className="bg-code-bg p-4 rounded-sm border border-code-border font-mono text-sm">
                    <div className="text-code-comment">Input:</div>
                    <div><span className="text-code-keyword">nums</span> = [<span className="text-code-string">2, 7, 11, 15</span>], <span className="text-code-keyword">target</span> = <span className="text-code-string">9</span></div>
                    <div className="text-code-comment">Output:</div>
                    <div>[<span className="text-code-string">0, 1</span>]</div>
                    <div className="text-code-comment mt-2">Explanation:</div>
                    <div className="text-code-comment">Because nums[0] + nums[1] == 9, we return [0, 1].</div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-foreground font-semibold mb-3">Constraints:</h3>
                  <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                    <li>2 ≤ nums.length ≤ 10⁴</li>
                    <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
                    <li>-10⁹ ≤ target ≤ 10⁹</li>
                    <li>Only one valid answer exists.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Code editor */}
            <div className="flex flex-col">
              {/* Language selector */}
              <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/50">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Language:</span>
                  <span className="bg-vars-blue text-white px-2 py-1 rounded-sm text-sm font-mono">JavaScript</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <div className="w-2 h-2 bg-muted rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Code area */}
              <div className="flex-1 bg-code-bg p-4 font-mono text-sm">
                <div className="flex">
                  <div className="text-code-line-number pr-4 select-none">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                  </div>
                  <div className="flex-1">
                    <div><span className="text-code-keyword">function</span> <span className="text-vars-blue">solution</span>(<span className="text-foreground">nums, target</span>) {'{'}</div>
                    <div className="pl-4 text-code-comment">// your code here</div>
                    <div className="pl-4">
                      <span className="bg-accent/20 px-1 animate-pulse">|</span>
                    </div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>

              {/* Test cases */}
              <div className="border-t border-border bg-secondary/20">
                <div className="flex gap-2 p-3 border-b border-border">
                  <Button variant="varsOutline" size="sm">Case 1</Button>
                  <Button variant="varsGhost" size="sm">Case 2</Button>
                  <Button variant="varsGhost" size="sm">Case 3</Button>
                </div>
                
                <div className="p-4 font-mono text-sm">
                  <div className="text-muted-foreground text-xs mb-2">INPUT:</div>
                  <div className="text-sm">nums = [2,7,11,15], target = 9</div>
                  <div className="text-muted-foreground text-xs mt-3 mb-2">EXPECTED OUTPUT:</div>
                  <div className="text-sm">[0,1]</div>
                  <div className="text-muted-foreground text-xs mt-3 mb-2">OUTPUT RECEIVED:</div>
                  <div className="text-muted-foreground">-</div>
                </div>

                <div className="flex gap-2 p-4 border-t border-border">
                  <Button variant="varsOutline" size="sm">
                    <Play className="w-4 h-4" />
                    Run
                  </Button>
                  <Button variant="varsAccent" size="sm">
                    <Upload className="w-4 h-4" />
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-12">
          <Button variant="varsAccent" size="lg">
            Play a real match
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};